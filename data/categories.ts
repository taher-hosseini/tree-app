// data/categories.ts
export interface Category {
    id: number;
    title: string;
    children: Category[];
}
const categories:Category[] = [
    {
        id: 1,
        title: "Electronics",
        children: [
            {
                id: 2,
                title: "Mobile Phones",
                children: [
                    {
                        id: 3,
                        title: "Smartphones",
                        children: [
                            { id: 4, title: "Android", children: [] },
                            { id: 5, title: "iOS", children: [] },
                            { id: 6, title: "Windows Phone", children: [] },
                        ],
                    },
                    {
                        id: 7,
                        title: "Feature Phones",
                        children: [
                            { id: 8, title: "Basic Phones", children: [] },
                            { id: 9, title: "Flip Phones", children: [] },
                        ],
                    },
                ],
            },
            {
                id: 10,
                title: "Laptops",
                children: [
                    {
                        id: 11,
                        title: "Gaming Laptops",
                        children: [
                            { id: 12, title: "NVIDIA Graphics", children: [] },
                            { id: 13, title: "AMD Graphics", children: [] },
                        ],
                    },
                    {
                        id: 14,
                        title: "Business Laptops",
                        children: [
                            { id: 15, title: "MacBook", children: [] },
                            { id: 16, title: "Windows Laptops", children: [] },
                        ],
                    },
                    {
                        id: 17,
                        title: "2-in-1 Laptops",
                        children: [
                            { id: 18, title: "Convertible", children: [] },
                            { id: 19, title: "Detachable", children: [] },
                        ],
                    },
                ],
            },
            {
                id: 20,
                title: "Headphones",
                children: [
                    {
                        id: 21,
                        title: "Wireless",
                        children: [
                            { id: 22, title: "Over-Ear", children: [] },
                            { id: 23, title: "In-Ear", children: [] },
                        ],
                    },
                    {
                        id: 24,
                        title: "Wired",
                        children: [
                            { id: 25, title: "Noise-Canceling", children: [] },
                            { id: 26, title: "Standard", children: [] },
                        ],
                    },
                    {
                        id: 27,
                        title: "Bluetooth",
                        children: [
                            { id: 28, title: "Neckband", children: [] },
                            { id: 29, title: "True Wireless", children: [] },
                        ],
                    },
                ],
            },
            {
                id: 30,
                title: "Cameras",
                children: [
                    {
                        id: 31,
                        title: "DSLR",
                        children: [
                            { id: 32, title: "Canon", children: [] },
                            { id: 33, title: "Nikon", children: [] },
                        ],
                    },
                    {
                        id: 34,
                        title: "Mirrorless",
                        children: [
                            { id: 35, title: "Sony", children: [] },
                            { id: 36, title: "Fujifilm", children: [] },
                        ],
                    },
                    {
                        id: 37,
                        title: "Action Cameras",
                        children: [
                            { id: 38, title: "GoPro", children: [] },
                            { id: 39, title: "DJI", children: [] },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 40,
        title: "Home Appliances",
        children: [
            {
                id: 41,
                title: "Washing Machines",
                children: [
                    {
                        id: 42,
                        title: "Front Load",
                        children: [
                            { id: 43, title: "Samsung", children: [] },
                            { id: 44, title: "LG", children: [] },
                        ],
                    },
                    {
                        id: 45,
                        title: "Top Load",
                        children: [
                            { id: 46, title: "Whirlpool", children: [] },
                            { id: 47, title: "Bosch", children: [] },
                        ],
                    },
                ],
            },
            {
                id: 48,
                title: "Refrigerators",
                children: [
                    {
                        id: 49,
                        title: "Single Door",
                        children: [
                            { id: 50, title: "Haier", children: [] },
                            { id: 51, title: "Samsung", children: [] },
                        ],
                    },
                    {
                        id: 52,
                        title: "Double Door",
                        children: [
                            { id: 53, title: "LG", children: [] },
                            { id: 54, title: "Samsung", children: [] },
                        ],
                    },
                    {
                        id: 55,
                        title: "French Door",
                        children: [
                            { id: 56, title: "Bosch", children: [] },
                            { id: 57, title: "Whirlpool", children: [] },
                        ],
                    },
                ],
            },
            {
                id: 58,
                title: "Microwave Ovens",
                children: [
                    {
                        id: 59,
                        title: "Solo",
                        children: [
                            { id: 60, title: "Samsung", children: [] },
                            { id: 61, title: "Panasonic", children: [] },
                        ],
                    },
                    {
                        id: 62,
                        title: "Grill",
                        children: [
                            { id: 63, title: "LG", children: [] },
                            { id: 64, title: "Sharp", children: [] },
                        ],
                    },
                    {
                        id: 65,
                        title: "Convection",
                        children: [
                            { id: 66, title: "IFB", children: [] },
                            { id: 67, title: "Whirlpool", children: [] },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 68,
        title: "Furniture",
        children: [
            {
                id: 69,
                title: "Sofas",
                children: [
                    { id: 70, title: "Leather", children: [] },
                    { id: 71, title: "Fabric", children: [] },
                    { id: 72, title: "Recliners", children: [] },
                ],
            },
            {
                id: 73,
                title: "Beds",
                children: [
                    { id: 74, title: "King Size", children: [] },
                    { id: 75, title: "Queen Size", children: [] },
                    { id: 76, title: "Single", children: [] },
                ],
            },
            {
                id: 77,
                title: "Tables",
                children: [
                    { id: 78, title: "Dining Tables", children: [] },
                    { id: 79, title: "Coffee Tables", children: [] },
                    { id: 80, title: "Study Tables", children: [] },
                ],
            },
            {
                id: 81,
                title: "Chairs",
                children: [
                    { id: 82, title: "Office Chairs", children: [] },
                    { id: 83, title: "Dining Chairs", children: [] },
                    { id: 84, title: "Recliner Chairs", children: [] },
                ],
            },
        ],
    },
];

export { categories };
