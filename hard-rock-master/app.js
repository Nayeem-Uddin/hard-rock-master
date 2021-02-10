function searchSongs(){
    const searchField = document.getElementById('input-field').value;
    //console.log(searchField);
    //searchField.value = '';
    const url = `https://api.lyrics.ovh/suggest/${searchField}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}