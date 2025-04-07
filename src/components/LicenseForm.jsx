import { useState, useEffect } from "react";
import productOptions from "../data/productOptions.json"; // Assuming you have a JSON file with product options

export default function LicenseForm() {
    const [productPackage, setProductPackage] = useState("");
    const [count, setCount] = useState("");
    const [price, setPrice] = useState("");
    const [licenses, setLicenses] = useState([]);
        
    function handleAddLicense() {
        if (!productPackage || !count || !price) return;

        const formattedLicense = {
            productPackage,
            count: parseInt(count, 10),
            price: Math.round(parseFloat(price) * 1000), // e.g. 19.90 => 19900
        };

        setLicenses((prev) => [...prev, formattedLicense]);
        setProductPackage("");
        setCount("");
        setPrice("");
    }

    return (
        <div>
            <h2>Define SSO License(s)</h2>
            <label>
                Product:
                <select
                    value={productPackage}
                    onChange={(e) => setProductPackage(e.target.value)}
                >
                    <option value="">-- Select a product --</option>
                    {productOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Quantity:
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    min="1"
                />
            </label>

            <label>
                Price:
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    pattern="^\d+(\.\d{1,2})?$"
                    placeholder="e.g. 19.90"
                />
            </label>

            <button type="button" onClick={handleAddLicense}>
                Add License
            </button>

            <pre>{JSON.stringify(licenses, null, 2)}</pre>
        </div>
    );
}