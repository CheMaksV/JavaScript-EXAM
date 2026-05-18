export function renderUser(user, userDiv) {
    userDiv.innerText = '';

    const data = {
        'MAIN INFO': {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        },

        'ADDRESS': {
            street: user.address?.street,
            suite: user.address?.suite,
            city: user.address?.city,
            zipcode: user.address?.zipcode,
            geo: {
                lat: user.address?.geo?.lat,
                lng: user.address?.geo?.lng
            }
        },

        'CONTACT': {
            phone: user.phone,
            website: user.website
        },

        'COMPANY': {
            name: user.company?.name,
            catchPhrase: user.company?.catchPhrase,
            bs: user.company?.bs
        }
    };

    for (const section in data) {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add(section.toLowerCase().replace(/\s+/g, '-'));

        const title = document.createElement('h4');
        title.innerText = `¯ ${section} ¯`;
        sectionDiv.appendChild(title);

        for (const key in data[section]) {
            const fieldValue = data[section][key];

            if (key === 'geo' && (fieldValue.lat || fieldValue.lng)) {
                const geoDiv = document.createElement('div');
                geoDiv.classList.add('geo');

                const geoTitle = document.createElement('h5');
                geoTitle.innerText = '· GEO ·';
                geoDiv.appendChild(geoTitle);

                for (const geoKey in fieldValue) {
                    const value = fieldValue[geoKey];
                    const p = document.createElement('p');
                    p.innerText = `${geoKey} - ${value}`;
                    geoDiv.appendChild(p);
                }

                sectionDiv.appendChild(geoDiv);

            } else {
                const p = document.createElement('p');
                p.innerText = `${key} - ${fieldValue}`;
                sectionDiv.appendChild(p);
            }
        }

        userDiv.appendChild(sectionDiv);
    }
}


export function renderPosts(posts, postsDiv) {
    postsDiv.innerText = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postP = document.createElement('p');
        postP.classList.add('post-info');
        postP.innerText = `${post.title}`;

        const postBtn = document.createElement('button');
        postBtn.classList.add('postBtn');
        postBtn.innerText = 'Details';

        postBtn.onclick = () => {
            window.location.href = `../post-details/post-details.html?id=${post.id}`;
        };

        postDiv.append(postP, postBtn);
        postsDiv.appendChild(postDiv);
    });
}
