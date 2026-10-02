import axios from "axios";

const AxiosApi = () => {

    async function getData() {
        try {
            let api = "https://fakestoreapi.com/products/";
            let response = await axios.get(api);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getSingleData() {
        try {
            let api = "https://fakestoreapi.com/products/1";
            let response = await axios.get(api);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function postData() {
        try {
            let api = "https://fakestoreapi.com/products";
            let response = await axios.post(api, {
                title: "New Product",
                price: 100,
                description: "New Product Description",
                image: "https://i.pravatar.cc",
                category: "electronics"
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function putData() {
        try {
            let api = "https://fakestoreapi.com/products/1";
            let response = await axios.put(api, {
                title: "Updated Product",
                price: 200,
                description: "Updated Description",
                image: "https://i.pravatar.cc",
                category: "electronics"
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function patchData() {
        try {
            let api = "https://fakestoreapi.com/products/1";
            let response = await axios.patch(api, {
                price: 300
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteData() {
        try {
            let api = "https://fakestoreapi.com/products/1";
            let response = await axios.delete(api);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>USing Axios</h1>
            <button onClick={getData}>GET All</button>
            <button onClick={getSingleData}>GET Single</button>
            <button onClick={postData}>POST</button>
            <button onClick={putData}>PUT</button>
            <button onClick={patchData}>PATCH</button>
            <button onClick={deleteData}>DELETE</button>
        </div>
    );
};

export default AxiosApi;