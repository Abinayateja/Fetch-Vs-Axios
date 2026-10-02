const FetchApi = () => {

    async function getData() {
        try {
            let api = "https://fakestoreapi.com/products/";
            let response = await fetch(api);
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getSingleData() {
        try {
            let api = "https://fakestoreapi.com/products/1";
            let response = await fetch(api);
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function postData() {
        try {
            let api = "https://fakestoreapi.com/products";
            let response = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "New Product",
                    price: 100,
                    description: "New Product Description",
                    image: "https://i.pravatar.cc",
                    category: "electronics"
                })
            });

            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function putData() {
        try {
            let api = "https://fakestoreapi.com/products/1";
            let response = await fetch(api, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "Updated Product",
                    price: 200,
                    description: "Updated Description",
                    image: "https://i.pravatar.cc",
                    category: "electronics"
                })
            });

            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function patchData() {
        try {
            let api = "https://fakestoreapi.com/products/1";
            let response = await fetch(api, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    price: 300
                })
            });

            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteData() {
        try {
            let api = "https://fakestoreapi.com/products/1";
            let response = await fetch(api, {
                method: "DELETE"
            });

            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Using Fetch</h1>
            <button onClick={getData}>GET All</button>
            <button onClick={getSingleData}>GET Single</button>
            <button onClick={postData}>POST</button>
            <button onClick={putData}>PUT</button>
            <button onClick={patchData}>PATCH</button>
            <button onClick={deleteData}>DELETE</button>
        </div>
    );
};

export default FetchApi;