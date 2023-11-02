const foodData = require('./food.json');

// 1. - [ ]  list all the food items

foodData.forEach(food => {
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});

// 2. - [ ] list all the food items with category vegetables

const veg_category =foodData.filter(food=>food.category==="vegetable");

veg_category.forEach(vegetable => {
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});


// 3. - [ ] list all the food items with category fruit

const fruit_category =foodData.filter(food=>food.category==="Fruit");

fruit_category.forEach(food => {
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});

//3. - [ ] list all the food items with category protien

const protein_category=foodData.filter(food=>food.category=="Protein");

protein_category.forEach(food=>{
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});

// 4. - [ ] list all the food items with category nuts

const nuts_category=foodData.filter(food=>food.category=="Nuts");

nuts_category.forEach(food=>{
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});

// 5. - [ ] list all the food items with category grains

const grains_category=foodData.filter(food=>food.category=="Grain");

grains_category.forEach(food=>{
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});

// 6. - [ ] list all the food items with category dairy

const dairy_category=foodData.filter(food=>food.category=="Dairy");

dairy_category.forEach(food=>{
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});

// 7. - [ ] list all the food items with calorie above 100

const above_calories=foodData.filter(food=>food.calorie>100);
above_calories.forEach(food=>{
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});

// 8. [ ] list all the food items with calorie below 100

const below_calories=foodData.filter(food=>food.calorie<100);
below_calories.forEach(food=>{
    console.log(`ID: ${food.id}`);
    console.log(`Food Name: ${food.foodname}`);
    console.log(`Calories: ${food.calorie}`);
    console.log(`Category: ${food.category}`);
    console.log(`Proteins: ${food.protiens}`);
    console.log(`Carbohydrates: ${food.cab}`);
    console.log('------------------');
});

// 9. [ ] list all the food items with highest protien content to lowest

const proteinItems = foodData.filter(food => food.category=="Protein");
proteinItems.sort((a, b) => b.protiens - a.protiens);
proteinItems.forEach(item => {
    console.log(`ID: ${item.id}`);
    console.log(`Food Name: ${item.foodname}`);
    console.log(`Calories: ${item.calorie}`);
    console.log(`Category: ${item.category}`);
    console.log(`Proteins: ${item.protiens}`);
    console.log(`Carbohydrates: ${item.cab}`);
    console.log('__________________________');
})

// 10. [ ] ist all the food items with lowest cab content to highest

const cabitems = foodData.map(item => ({ ...item }));
cabitems.sort((a, b) => a.cab - b.cab);
cabitems.forEach(item => {
        console.log(`ID: ${item.id}`);
        console.log(`Food Name: ${item.foodname}`);
        console.log(`Calories: ${item.calorie}`);
        console.log(`Category: ${item.category}`);
        console.log(`Proteins: ${item.protiens}`);
        console.log(`Carbohydrates: ${item.cab}`);
        console.log('__________________________');
    })