export default function getData() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4)
                resolve(JSON.parse(this.responseText));
        }

        // Solution is return promise


        // xhr.setRequestHeader('Access-Control-Allow-Origin', 'origin');

        xhr.open('GET', './services/api.json', true);
        xhr.send();
    });
}