import {writable} from "svelte/store";

export let isLinkPopUpModelOpen = writable(false);
export let linkPopUpModelData = writable({
    courseName: "",
    courseWhatsappURL: ""
})