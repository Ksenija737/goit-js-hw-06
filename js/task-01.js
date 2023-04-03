const listWithId = document.querySelectorAll('#categories li.item');
const countId = listWithId.length;
console.log(`Number of categories: ${countId}`);

listWithId.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent} `);
   
    console.log(`Elements: ${item.querySelectorAll('li').length }`);
});

// const items = listWithId.children;
