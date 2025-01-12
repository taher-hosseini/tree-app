// page.tsx
import React from 'react';
import { categories } from '../data/categories';
import CategoryList from '../components/CategoryList';

const App: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold mb-4">Category List</h1>
            <CategoryList categories={categories} />
        </div>
    );
};

export default App;
