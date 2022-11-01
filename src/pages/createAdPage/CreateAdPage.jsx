import Input from "../../components/input/Input"
import Title from "../../components/title/Title"
import {useState} from "react"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Api from "../../api/Api";


const toaastSettings = {
    position: "bottom-right",
    theme: "colored",
}

function CreateAdPage(){
    const [type, setType] = useState("houses")
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [isSending, setSending] = useState(false)
    const navigate = useNavigate()
  

    const submit = (e) => {
        e.preventDefault();
        setSending(true)
        toast.info("Start", toaastSettings)

        const data = {
                  title: name,
                  imgUrl: imgUrl, 
                  price: price,
                  description: description,
              }

        const response = (res) => {
          if(res.status === 201){
            toast.success("Success", toaastSettings)
            navigate("/dashboard")
          } else {
            toast.error("Error", toaastSettings)
            setSending(false)
          }
        }     
        if(type === "houses"){     
        Api.postHouse(data).then(response)
          } else {
          Api.postCars(data).then(response)
          }
        }
    
  const handleName = (e) => setName(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImg = (e) => setImgUrl(e.target.value);
  const handleType = (e) => setType(e.target.value)

    return(
        <div className="page">
            <Title positiom="center">Создать объявления</Title>
            <form onSubmit={submit}>
               <Input value={name} onChange={handleName} title="Название"  type="text" placeholder="Название" required/>
               <Input value={price} onChange={handlePrice} title="Цена" type="number" placeholder="Цена в долларах" required/>
               <Input value={description} onChange={handleDescription} title="Описание" type="text" placeholder="Описание" required/>
               <Input value={imgUrl} onChange={handleImg} title="Фото" type="text" placeholder="Фото" required/>
               <div>
                <label>
                  <input onChange={handleType} checked={type === "houses"} type="radio" name="type" value="houses" />
                  Houses
                </label>
                <label>
                  <input onChange={handleType} checked={type === "cars"} type="radio" name="type" value="cars" />
                  Cars
                </label>
               </div>
               <button disabled={isSending} className="btn-primary">+ создать</button>
               </form>
        </div>
    )
}

export default CreateAdPage;