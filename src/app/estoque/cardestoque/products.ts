export const sampleProducts: Product[] = [
    { ProductID: 1, ProductName: "Chai", UnitPrice: 18 },
    { ProductID: 2, ProductName: "Chang", UnitPrice: 19 },
    { ProductID: 3, ProductName: "Aniseed Syrup", UnitPrice: 10 },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22 },
    { ProductID: 5, ProductName: "Chef Anton's Gumbo Mix", UnitPrice: 21 },
    { ProductID: 6, ProductName: "Grandma's Boysenberry Spread", UnitPrice: 25 },
    { ProductID: 7, ProductName: "Uncle Bob's Organic Dried Pears", UnitPrice: 30 },
    { ProductID: 8, ProductName: "Northwoods Cranberry Sauce", UnitPrice: 40 },
    { ProductID: 9, ProductName: "Mishi Kobe Niku", UnitPrice: 97 },
    { ProductID: 10, ProductName: "Ikura", UnitPrice: 31 }
];

interface Product {
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
}
