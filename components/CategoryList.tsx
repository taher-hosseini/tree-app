// components/CategoryList.tsx
'use client';

import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface Category {
    id: number;
    title: string;
    children: Category[];
}

interface CategoryListProps {
    categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
    const [checked, setChecked] = useState<{ [key: number]: boolean }>({});

    const findAncestors = (id: number, categories: Category[], ancestors: number[] = []): number[] => {
        for (const category of categories) {
            if (category.children.some((child) => child.id === id)) {
                ancestors.push(category.id);
                return findAncestors(category.id, categories, ancestors);
            } else if (category.children.length > 0) {
                const result = findAncestors(id, category.children, ancestors);
                if (result.length > 0) {
                    ancestors.push(category.id);
                    return result;
                }
            }
        }
        return ancestors;
    };

    const toggleCheckbox = (id: number, isChecked: boolean, category: Category) => {
        setChecked((prev) => {
            const newChecked = { ...prev, [id]: isChecked };

            const updateChildCheckboxes = (category: Category, isChecked: boolean) => {
                category.children.forEach((child) => {
                    newChecked[child.id] = isChecked;
                    if (child.children.length > 0) {
                        updateChildCheckboxes(child, isChecked);
                    }
                });
            };

            updateChildCheckboxes(category, isChecked);

            const updateParentCheckboxes = (id: number, categories: Category[]) => {
                categories.forEach((cat) => {
                    if (cat.children.some(child => child.id === id)) {
                        const allChildrenChecked = cat.children.every(child => newChecked[child.id]);
                        newChecked[cat.id] = allChildrenChecked;
                        updateParentCheckboxes(cat.id, categories);
                    }
                    if (cat.children.length > 0) {
                        updateParentCheckboxes(id, cat.children);
                    }
                });
            };

            updateParentCheckboxes(id, categories);

            return newChecked;
        });
    };



    const renderCategories = (categories: Category[]) => {
        return categories.map((category) => (
            <div key={category.id} className="mb-2">
                <div className="flex items-center cursor-pointer space-x-2">
                    <MdOutlineKeyboardArrowRight
                        className={`transform transition-transform ${expanded[category.id] ? 'rotate-90' : 'rotate-0'}`}
                        style={{ transition: 'transform 0.3s ease' }}
                        onClick={() =>
                            setExpanded((prevExpanded) => ({
                                ...prevExpanded,
                                [category.id]: !prevExpanded[category.id],
                            }))
                        }
                    />
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={checked[category.id] || false}
                        onChange={(e) => toggleCheckbox(category.id, e.target.checked, category)}
                    />
                    <span>{category.title}</span>
                </div>

                {expanded[category.id] && category.children.length > 0 && (
                    <div className="ml-6">{renderCategories(category.children)}</div>
                )}
            </div>
        ));
    };

    const expandAll = () => {
        const expandAllCategories = (categories: Category[]) => {
            categories.forEach((category) => {
                setExpanded((prev) => ({ ...prev, [category.id]: true }));
                if (category.children.length > 0) {
                    expandAllCategories(category.children);
                }
            });
        };

        expandAllCategories(categories);
    };

    const collapseAll = () => {
        const collapseAllCategories = (categories: Category[]) => {
            categories.forEach((category) => {
                setExpanded((prev) => ({ ...prev, [category.id]: false }));
                if (category.children.length > 0) {
                    collapseAllCategories(category.children);
                }
            });
        };

        collapseAllCategories(categories);
    };

    return (
        <div>
            <div className="mb-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={expandAll}
                >
                    Expand all
                </button>
                <button
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition ml-2"
                    onClick={collapseAll}
                >
                    Collapse all
                </button>
            </div>

            {renderCategories(categories)}
        </div>
    );
};

export default CategoryList;
