import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 4hxfkQDbLK8Yv7iBTDYqDZQCfA16qyXfHiKnL05lDjA447JiQDDA-_0vQW9oBnLxFq5tDp0c9iGy3ZD-b_HRG7IKbgE0M2ml4KSSOMc0T3UROhM0pkjF8CgIifsSZXYx"
    }
});