import { createSlice } from '@reduxjs/toolkit';

export const DisplayGistSlice = createSlice({
    name: 'displayGist',
    initialState: {
        gists: []
    },
    reducers: {
        get: (state, action) => {
            state.gists = action.payload
        }
    }
})

export const { get } = DisplayGistSlice.actions;

export const selectGists = state => state.DisplayGistReducer.gists;

export const getGists = (userName) => dispatch => {
    fetch(`https://api.github.com/users/${userName}/gists`)
        .then(async res => {
            try {
                const data = await res.json()
                const response = await Promise.all(
                    data.map((item) => {
                        return fetch(item.forks_url)
                    }))
                for (let j = 0; j < response.length; j++) {
                    data[j].languages = []
                    Object.keys(data[j].files).forEach(key => {
                        const language = data[j].files[key].type;
                        if (data[j].languages.indexOf(language) < 0) {
                            data[j].languages.push(language)
                        }
                    })
                    const item = await response[j].json();
                    const length = item.length < 3 ? item.length : 2;
                    data[j].forkedUsers = []
                    for (let i = 0; i <= length; i++) {
                        if (item[i]) {
                            data[j].forkedUsers.push({ html_url: item[i].html_url, avatar_url: item[i].owner.avatar_url })
                        }
                    }
                }
                dispatch(get(data))
            } catch (ex) {
                console.log(ex)
            }

        }).catch((err) => {
            console.log(err)
        }

        )
}

export default DisplayGistSlice.reducer