import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
        const response = await fetch(
            "https://667fab03f2cb59c38dc9718e.mockapi.io/crud",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// read action
export const showUser = createAsyncThunk(
    "showUser",
    async (data, { rejectWithValue }) => {
        const response = await fetch(
            "https://667fab03f2cb59c38dc9718e.mockapi.io/crud",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// delet action
export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue }) => {
        const response = await fetch(
            `https://667fab03f2cb59c38dc9718e.mockapi.io/crud/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

//update action
export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
        console.log("updated data", data);
        const response = await fetch(
            `https://667fab03f2cb59c38dc9718e.mockapi.io/crud/${data.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
// ...........................................
// export const updateUser = createAsyncThunk(
//     "updateUser",
//     async (data, { rejectWithValue }) => {
//         try {
//             const response = await fetch(
//                 `https://667fab03f2cb59c38dc9718e.mockapi.io/crud/${data.id}`,
//                 {
//                     method: "PUT",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(data),
//                 }
//             );
//             const result = await response.json();
//             return result;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

// .......................................
export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        user: [],
        loading: false,
        error: null,
        searchData: [],
    },
    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })

            // for read action ................................
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // DELETE Action ................................
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    state.user = state.user.filter((ele) => ele.id !== id);
                }
            })
            // .addCase(deleteUser.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // })

            // update Action ................................

            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = state.user.map((ele) =>
                    ele.id === action.payload.id ? action.payload : ele
                );
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
    },
});

// export const { } = userDetails.actions;

export default userDetail.reducer;
export const { searchUser } = userDetail.actions;

