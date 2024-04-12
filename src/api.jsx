import axios from 'axios'

const  searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=RXGwhYvJfeqCu7SAB2WHgjaJEa-8__geOm9R4gTk3to'

    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })
    console.log(response)
}

export default searchImage