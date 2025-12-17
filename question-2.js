// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
// 1
inventory[0].quantity = 200
console.log(inventory)

// 2
inventory.push({
  name: "Orange",
  price: 20,
  quantity: 300
}
)
console.log(inventory)

// 3
totalPrice = 0
for (let i in inventory) {
  totalPrice = totalPrice + (inventory[i].price * inventory[i].quantity)
  console.log(totalPrice)
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต้อก ${totalPrice} บาท`)