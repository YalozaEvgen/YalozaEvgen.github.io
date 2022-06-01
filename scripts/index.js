//_________________________________________________________Services_______________________________________________________________
const itemsTitle = document.querySelector('.services-items-title');
const activeItem = document.querySelector('.services-item-title-active');
const itemsContent = document.querySelectorAll('.services-content');

const showServicesItem = () => {

    itemsContent.forEach(item => {
        if (!(activeItem.dataset.itemTitle === item.dataset.itemContent)) {
            item.style.display = "none";
        }
    })

    itemsTitle.addEventListener('click', (e) => {
        e.currentTarget.childNodes.forEach(item => item.classList?.remove('services-item-title-active'));
        e.target.classList.add('services-item-title-active');

        itemsContent.forEach(item => {
            item.style.display = "none";
            if (e.target.dataset.itemTitle === item.dataset.itemContent) {
                item.style.display = "";
            }
        })
    })
}

showServicesItem();



//_________________________________________________________Amazing Work_______________________________________________________________


const amazinWorkMenu = document.querySelector(".amazin-work-menu");
let currentActive = document.querySelector(".amazin-work-item-active");
let allImgCollection = document.querySelectorAll(".amazin-image");
const btnLoadMore = document.querySelector(".load-more");
let max = 12;

const showAllElements = (array, min, max) => {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.add("display-none");
        btnLoadMore.classList.remove("display-none");
        if (i >= min && i < max) {
            array[i].classList.remove("display-none");
        }
        if (max > array.length) {
            btnLoadMore.classList.add("display-none");
        }
    }
}

showAllElements(allImgCollection, 0, 12);

const filterImgContent = (array, min, max) => {
    let category = document.querySelector(".amazin-work-item-active").dataset.category
    if (category === "All") {
        return showAllElements(array, min, max);
    }
    const result = [];
    array.forEach(element => {
        element.classList.add("display-none");
        if (element.dataset.category === category) {
            result.push(element);
        }
    })
    showAllElements(result, min, max);
}

const changeActiveFilterText = (currentItem, activeItem) => {
    max = 12;
    currentItem.classList.remove("amazin-work-item-active");
    currentItem = activeItem;
    activeItem.classList.add("amazin-work-item-active");
    return currentActive = currentItem;
}

amazinWorkMenu.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
        allImgCollection = document.querySelectorAll(".amazin-image");
        changeActiveFilterText(currentActive, e.target);
        filterImgContent(allImgCollection, 0, 12);
    }
})

const loadAnimation = document.querySelector(".gooey")
loadAnimation.classList.add("display-none");

btnLoadMore.addEventListener("click", (e) => {
    loadAnimation.classList.remove("display-none");
    setTimeout(() => {
        loadAnimation.classList.add("display-none");
        max += 12;
        filterImgContent(allImgCollection, 0, max);
    }, 2000);
})


//_________________________________________________People Say______________________________________________________________________________


const usersCollection = document.querySelectorAll(".user");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const currentUserListItem = document.querySelector(".active-user-item");

previousBtn.addEventListener("click", (event) => {
    const currentUserListItem = document.querySelector(".active-user-item");
    const dataUser = currentUserListItem.dataset.user;
    if (dataUser === "liza-sluta") {
        return;
    }
    const dataPreviousUser = currentUserListItem.previousElementSibling.dataset.user;

    document.querySelector(".current-user").className = "display-none";
    document.querySelector(`[data-user="${dataPreviousUser}"]`).className ="current-user";

    currentUserListItem.classList.remove("active-user-item");
    currentUserListItem.previousElementSibling.classList.add("active-user-item");
});

usersCollection.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        const currentUser = document.querySelector(".current-user");
        const dataUser = event.currentTarget.dataset.user;
        const focusUser = document.querySelector(`[data-user='${dataUser}']`);
        const currentUserListItem = document.querySelector(".active-user-item");

        if (event.currentTarget.classList.contains("active-user-item")) {
            return;
        } else {
            currentUserListItem.classList.remove("active-user-item");
            event.currentTarget.classList.add("active-user-item");
            currentUser.className = "display-none";
            focusUser.className = "current-user";
        }
    });
});

nextBtn.addEventListener("click", (event) => {
    const currentUserListItem = document.querySelector(".active-user-item");
    const dataUser = currentUserListItem.dataset.user;

    if (dataUser === "sasha-draft") {
        return;
    }
    const dataNextUser = currentUserListItem.nextElementSibling.dataset.user;
    document.querySelector(".current-user").className = "display-none";
    document.querySelector(`[data-user="${dataNextUser}"]`).className ="current-user";

    currentUserListItem.classList.remove("active-user-item");
    currentUserListItem.nextElementSibling.classList.add("active-user-item");
});