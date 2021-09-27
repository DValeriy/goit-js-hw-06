const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const root = document.querySelector(".gallery")
// console.log(root);
let strHtml = images.map(({url,alt}) => {
    return `<li>
      <img class='gallery-img' src="${url}" alt="${alt}" >
    </li>`
}).join("");

console.log(strHtml);
root.insertAdjacentHTML('afterbegin', strHtml)






// спитати на лекції/практиці

// const root = document.querySelector(".gallery")
// // console.log(root);-
// let arrHtml= images.map(item => {
//     const liNode = document.createElement("li")
//     const imgNode = document.createElement('img')
//     imgNode.setAttribute('src', item.url);
//     imgNode.setAttribute('alt', item.alt);
//     imgNode.style.width = `400px`;
//     imgNode.style.height =`400px`;
//     liNode.append(imgNode)
//     console.log(liNode);
//     console.log(liNode.outerHTML)
//     // console.log(`${liNode}`)
//     return liNode.outerHTML
//     return liNode.toString()
// })
// let strHtml = arrHtml.join(",");
// console.log(strHtml);
// root.insertAdjacentHTML('afterbegin',strHtml)
