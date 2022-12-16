import {createSlice} from "@reduxjs/toolkit"
import {fetchContacts, addContacts, deleteContacts, changeContacts,} from './operations'

const contactsInitialState = {
    contacts: {
        items: [
                { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
                { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
                { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
                { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
        ],
        isLoading: false,
        error: null
      },
}

export const phoneSlice = createSlice({
    name: 'phones',
    initialState: contactsInitialState,
    extraReducers:builder => {
        builder
        .addCase(fetchContacts.pending, (state, action) => {
                state.contacts.isLoading = true;  
                state.contacts.error = '';
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error =  action.payload;
        })


        .addCase(addContacts.pending, (state, action) => {
            state.contacts.isLoading = true;  
            state.contacts.error = '';
        })
        .addCase(addContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items.push(action.payload);
               
        })
        .addCase(addContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error =  action.payload;
        })

        .addCase(deleteContacts.pending, (state, action) => {
                state.contacts.isLoading = true;  
                state.contacts.error = '';
        })
        .addCase(deleteContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload)
        })
        .addCase(deleteContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error =  action.payload;
        })


        // .addCase(changeContacts.pending, (state, action) => {
        //         state.contacts.isLoading = true;
        //         state.contacts.error = '';
        // })
        // .addCase(changeContacts.fulfilled, (state, { payload }) => {
        // state.contacts.items = [
        //         payload,
        //         ...state.contacts.items.filter(contact => {
        //         return contact.id !== payload.id;
        //         }),
        // ];

        // state.contacts.isLoading = false;
        // })
        // .addCase(changeContacts.rejected, (state, action) => {
        // state.contacts.error = action.payload;
        // state.contacts.isLoading = false;
        // });


    }
   
})
export const phonesReducer = phoneSlice.reducer;
// export const getPhones = state => state.contactsData.contacts.items;
export const getPhones = ({ contacts }) => contacts.contacts.items;
