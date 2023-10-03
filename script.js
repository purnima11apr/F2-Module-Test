const jsonData = [
    [
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ]
];

const recipeCardsContainer = document.getElementById("recipeCards");

// Get the search input and button elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Function to filter and display recipes based on the search query
function updateDisplayedRecipes(query) {
    // Clear the existing displayed recipes
    recipeCardsContainer.innerHTML = "";

    // Filter recipes based on the search query
    const filteredRecipes = jsonData[0].filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
    );

    // Check if the search input is empty
    if (query === "") {
        // If it's empty, display all recipes
        jsonData[0].forEach(recipe => {
            createRecipeCard(recipe);
        });
    } else {
        // If not empty, display the filtered recipes
        filteredRecipes.forEach(recipe => {
            createRecipeCard(recipe);
        });
    }
}

// Function to create a recipe card
function createRecipeCard(recipe) {
    // Create a card div
    const card = document.createElement("div");
    card.className = "card";

    // Create an image element
    const image = document.createElement("img");
    image.src = recipe.imageSrc;
    image.alt = recipe.name;

    // Create other elements for the card (e.g., name, time, rating, type)
    const name = document.createElement("h2");
    name.textContent = recipe.name;

    const time = document.createElement("p");
    time.textContent = `Time: ${recipe.time}`;

    const type = document.createElement("p");
    type.textContent = `Type: ${recipe.type}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${recipe.rating}`;

    // Create a "like" button
    const likeButton = document.createElement("button");
    likeButton.className = "like-button";
    likeButton.textContent = recipe.isLiked ? "Liked" : "Like";

    // Add a click event listener to toggle the "like" state
    likeButton.addEventListener("click", () => {
        recipe.isLiked = !recipe.isLiked;
        likeButton.textContent = recipe.isLiked ? "Liked" : "Like";
        likeButton.classList.toggle("liked", recipe.isLiked);
    });

    // Append elements to the card
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(time);
    card.appendChild(type);
    card.appendChild(rating);
    card.appendChild(likeButton);

    // Append the card to the container
    recipeCardsContainer.appendChild(card);
}

// Add an event listener to the search button
searchButton.addEventListener("click", () => {
    const searchQuery = searchInput.value.trim();
    updateDisplayedRecipes(searchQuery);
});

// Add an event listener to the search input for live updates
searchInput.addEventListener("input", () => {
    const searchQuery = searchInput.value.trim();
    updateDisplayedRecipes(searchQuery);
});

// Initial display of all recipes
updateDisplayedRecipes("");

// Function to filter and display recipes based on the filter type
function filterRecipes(filterType,above4_5 , below4_0) {
    // Clear the existing displayed recipes
    recipeCardsContainer.innerHTML = "";

    // Filter recipes based on the filter type and rating checkboxes
    const filteredRecipes = jsonData[0].filter(recipe => {
        if (filterType === 'all') {
            // Display all recipes, no matter the rating
            return true;
        } else if (filterType === 'veg' && recipe.type === 'veg') {
            // Display veg recipes
            return true;
        } else if (filterType === 'non-veg' && recipe.type === 'non-veg') {
            // Display non-veg recipes
            return true;
        };

        // Check if the recipe's rating matches the checkbox criteria
        if (filterType ==='above4.5' && recipe.rating >= 4.5) {
            return true;
        } else if (filterType==='below4.0' && recipe.rating <= 4.0) {
            return true;
        } else if (filterType == null) {
            return true;
        }
        

        // By default, do not display the recipe
        return false;
    });

    // Display the filtered recipes
    filteredRecipes.forEach(recipe => {
        createRecipeCard(recipe);
    });
}

document.getElementById("above4.5").addEventListener("change", () => {
    applyRatingFilter();
});

document.getElementById("below4.0").addEventListener("change", () => {
    applyRatingFilter();
});

function applyRatingFilter() {
    // Get selected rating filter options
    const above4_5 = document.getElementById("above4.5").checked;
    const below4_0 = document.getElementById("below4.0").checked;

    // Determine the rating filter to apply
    let ratingFilter = null;

    if (above4_5 && below4_0) {
        // Both checkboxes are checked, show all recipes
        ratingFilter = null;
    } else if (above4_5) {
        // Only "above4.5" checkbox is checked, show recipes above 4.5
        ratingFilter = 'above4.5';
    } else if (below4_0) {
        // Only "below4.0" checkbox is checked, show recipes below 4.0
        ratingFilter = 'below4.0';
    } else {
        // Both checkboxes are unchecked, show all recipes
        ratingFilter = null;
    }

    // Call filterRecipes with the rating filter
    filterRecipes(ratingFilter, above4_5, below4_0);
}
