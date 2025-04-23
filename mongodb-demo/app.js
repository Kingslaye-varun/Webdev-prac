const Item = require('./db');

// Create a new item
const newItem = new Item({
  title: 'Sample Item',
  description: 'This is a sample description',
});

// Save the item
newItem.save()
  .then(() => {
    console.log('✅ Item saved successfully!');
    return Item.find(); // Fetch all items
  })
  .then((items) => {
    console.log('📦 All items in DB:');
    console.log(items);
  })
  .catch((err) => {
    console.error('❌ Error:', err);
  });
