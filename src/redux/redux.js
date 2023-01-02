import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { click } from "@testing-library/user-event/dist/click";
const loging=createSlice({
    name:"loging",
    initialState:{log:true},
    reducers:{
        getaccount(state){
            state.log=false;
        },
        getback(state){
            state.log=true;
        }

    }
})
const additems=createSlice({
    name:"additems",
    initialState:{items:{},valueforchange:"",showlist:false,shownon:false,shownondiv:true},
    reducers:{
        additems(state,action){
            const nn=action.payload;
            console.log(nn)
   state.items=
    {id:nn.id,
        task:nn.task,
        date:nn.date
}
if(state.items.length>=2){state.showlist=true}
else state.showlist=false
if(state.items.length>=1){state.shownon=true}
if(state.items.length>=1){state.shownondiv=false}


        },
       
        /* removeitem(state,action){
        const removibleitem=action.payload;
        const allstatevalues=state.items.filter((item)=>item.id!==removibleitem.id);
        state.items=[...allstatevalues]
        console.log(state.items.length)
        if(state.items.length>=2){state.showlist=true}
        else state.showlist=false
        if(state.items.length>=1){state.shownon=true}
        if(state.items.length>=1){state.shownondiv=false}
   
        
        }, */
       /*  returnzero(state,action){
        state.items=[];
        state.showlist=false
        state.shownon=false
        state.shownondiv=true
        }, */

/*   showchange(state,action){
    const newitem=action.payload;
    console.log(newitem)
    if(state.items.length>=2){state.showlist=true}
    else state.showlist=false
    if(state.items.length>=1){state.shownon=true}
    if(state.items.length>=1){state.shownondiv=false}

  } */
    }
})
const show=createSlice({
    name:"show",
  initialState:{showing:false},
  reducers:{
    showstates(state){
state.showing=!state.showing
    }
  }
})
const newstates=createSlice({
    name:"newstates",
    initialState:{items:{}},
    reducers:{
        newstateaction(state,action){
            state.items=action.payload
        }

    }
})
const addinput=createSlice({
    name:"addinput",
    initialState:{inputval:""},
    reducers:{
        adddate(state,action){
            state.inputval=action.payload
            console.log(state.inputval)
        }
        
    }
})

const changeclass=createSlice({
    name:'changeclass',
    initialState:{item:{},click:false},
    reducers:{
        change(state,action){
        state.item=action.payload
        console.log(state.item)
        },
        click(state){
            state.click=true
        },
        unclick(state){
            state.click=false
        }
    }
})
const deleteitem=createSlice({
    name:"deleteitem",
    initialState:{item:{}},
    reducers:{
        delete(state,action){
            state.item=action.payload
            console.log(state.item)
        }
    }
})
const store=configureStore({
reducer:{newstates:newstates.reducer,
    loging:loging.reducer,
    additems:additems.reducer,
    show:show.reducer,
    addinput:addinput.reducer,
    changeclass:changeclass.reducer,
    deleteitem:deleteitem.reducer,

}


})
export const deleteit=deleteitem.actions
export const change=changeclass.actions
export const inputdate=addinput.actions
export const newnew=newstates.actions
export const showww=show.actions
export const addit=additems.actions
export const logaction=loging.actions
export default store
