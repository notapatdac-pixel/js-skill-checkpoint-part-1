// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minStock = inventory[0]
for (let i in inventory) {
  if (inventory[i].quantity < minStock.quantity) {
    minStock = inventory[i]
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minStock.name} ซึ่งมี ${minStock.quantity} ชิ้น`)