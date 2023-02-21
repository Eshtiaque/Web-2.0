document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    // console.log(friend);
    for (const friend of friends) {
        friend.style.background = 'lightblue';
    }
})
document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
    // console.log(friend);

}
)
document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const friend =document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML=`
    <h3 class="friend-name" >New Friend</h3>
    <p>something new added </p>
    `
   friendContainer.appendChild(friend);

}
)
