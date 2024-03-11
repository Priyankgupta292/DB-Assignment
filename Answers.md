# Answer1

1. The relationship between the **"Product"** and **"Category"** entities is established through a reference in the ProductSchema. Specifically, the **category_id** field in the ProductSchema is a reference to a document in the **"Category"** collection.

2. This means that each product document can be associated with a category document by storing the _id of the corresponding category document in the **category_id** field of the product document.

3. With this setup, we can perform operations like fetching all products belonging to a specific category or retrieving the category information for a particular product by populating the **category_id** field when querying the **"Product"** collection.


In summary, the relationship between **"Product"** and **"Category"** entities is a one-to-many relationship, where each product belongs to one category, and each category can have multiple products associated with it.

--- 

# Answer2

With the following way we can make sure that each Product in Product schema has a valid category assigned to it

```javascript
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // Other fields...
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true // Ensure category_id is required
    },
    // Other fields...
});

// Define foreign key constraint
ProductSchema.path('category_id').validate(async function(value) {
    const Category = mongoose.model('Category');
    const category = await Category.findById(value);
    return category !== null; // Return true if category exists, false otherwise
}, 'Invalid category');

// Example usage: Query products and populate the category
const products = await Product.find().populate('category_id');

```

Here by using this code segment we can achieve our constraint in following way

1. The **category_id** field is marked as required to ensure that every product must have a category assigned to it.

2. A validation function is added using **ProductSchema.path('category_id').validate()**. This function asynchronously checks if the referenced category exists in the **"Category"** collection

3. When querying products, you can use **populate('category_id')** to populate the category information for each product.

With these changes, we can ensure that each product in the **"Product"** collection has a valid category assigned to it, and any attempt to insert or update a product with an invalid category will result in a validation error.

---

# Answer3

- The implementation of schema is done using the express.js node.js and mongodb 
- Here in this repo in the models folder the definition of the Schemas is given You can check it 
- In the config folder the DB.js file is containing the code for connecting to the database
-The prerequisite to run this project is that you have to install node.js to your computer 
- Type 'npm i' in your terminal this will install all packages and create node-modules folder
- Now you can run this by typing 'npm run dev' in the terminal 