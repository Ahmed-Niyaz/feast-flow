import { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { food_list } from '../../assets/all_food_assets/assets_food'
import './Add.css'
import axios from 'axios'
import { toast } from 'react-toastify'



//import { food_list } from '../../as1/assets' // this I might have deleted

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });
  
  function onChangeHandler(e) {
    const { name, value } = e.target;
    setData(prev => {
      return { ...prev, [name]: value }
    })
  }
  
  async function onSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        console.log('Successfully added')
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch(error) {
      console.error(error)
    }
    
    // const response = await axios.post(`${url}/api/food/add`, formData);
    // if (response.data.success) {
    //   setData({
    //     name: "",
    //     description: "",
    //     price: "",
    //     category: "Salad"
    //   });
    //   setImage(false);
    // } else {
    //   console.log('upload error')
    // }
    
  }
  

//   const addAll = async () => {
//     for (const blog of blog_data) {
//         const {id, title, description, image, author, author_img, category} = blog;
//         console.log(id);
//         async function convertImg(image) {
//             const src = image.src;
//             // fetch(src)
//             // .then(res => res.blob())
//             // .then(blob => {
//             //     const urlParts = src.split('/')
//             //     const last = urlParts.slice(-1);
//             //     // console.log(urlParts);
//             //     // console.log(last);
//             //     const nameParts = last[0].split('.');
//             //     // console.log(nameParts);
//             //     const filename = nameParts[0] + '.' + nameParts.slice(-1);
//             //     // console.log(filename);
                   
//             //     const imgFile = new File([blob], filename, {type: blob.type});
//             //     console.log(imgFile)
//             //     return imgFile;
//             // });

//             const response = await fetch(src);
//             const blob = await response.blob();

//             const urlParts = src.split('/')
//             const last = urlParts.slice(-1);
//             const nameParts = last[0].split('.');
//             const filename = nameParts[0] + '.' + nameParts.slice(-1);

//             const imgFile = new File([blob], filename, {type: blob.type});
        
//             return imgFile;

//         }

//         const imageFile = await convertImg(image)

//         const formData = new FormData();
//         formData.append("title", title);
//         formData.append("description", description);
//         formData.append("category", category);
//         formData.append("author", author);
//         formData.append("authorImg", '/author_img.png');
//         formData.append("image", imageFile);

//         const response = await axios.post("/api/blog", formData);

//         if (response.data.success) {
//             toast.success(id, 'added');
//         } else {
//             toast.error(response.data.message);   
//         }
//     }
//     fetchBlogs();
// }

  async function addAllFood() {
    
    for (const food of food_list) {
      const { name, price, description, category, image } = food;

      async function convertImg(image) {
        const src = image;

        const response = await fetch(src);
        const blob = await response.blob();

        const urlParts = src.split('/')
        const last = urlParts.slice(-1);
        const nameParts = last[0].split('.');
        const filename = nameParts[0] + '.' + nameParts.slice(-1);

        const imgFile = new File([blob], filename, {type: blob.type});

        return imgFile;
        
      }

      const imageFile = await convertImg(image);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", Number(price));
      formData.append("category", category);
      formData.append("image", imageFile);

      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        toast.success('Successfully added')
      } else {
        toast.error('Error adding')
      }
    }

  }

  
  return (
    <div className='add'>
        <form onSubmit={onSubmitHandler} className='flex-col'>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt=""/>
                </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className="add-product-name flex-col">
                <label htmlFor="name"><p>Product name</p></label>
                <input onChange={onChangeHandler} value={data.name} type="text" id='name' name='name' placeholder='Type Food name here' />
            </div>
            <div className="add-product-description flex-col">
                <label htmlFor="description"><p>Product description</p></label>
                <textarea onChange={onChangeHandler} value={data.description} name="description" id="description" placeholder='Write description here'></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <label htmlFor="category"><p>Product category</p></label>
                    <select onChange={onChangeHandler} value={data.category} name="category" id="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desserts">Desserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Veg">Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <label htmlFor="price"><p>Product price</p></label>
                    <input onChange={onChangeHandler} value={data.price}  type="Number" name='price' id='price' placeholder='$10' />
                </div>
            </div>
            <button type='submit' className='btn bg-red-600 hover:bg-red-500 w-[120px] text-white'>ADD</button>
        </form>

        <div className='btn btn-warning mt-40' onClick={addAllFood}>
          Try add all food from file for displaying all foods
        </div>
    </div>
  )
}

export default Add;