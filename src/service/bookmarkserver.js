"use server"

import { revalidateTag } from "next/cache"
import { getBookmarks, postBookmark, removeBookmarkFunc } from "./bookmark"

export const getBookmarkAction = async ()=> {
    const data = await getBookmarks()
    revalidateTag("bookmarks")
    return data;
}

export const removeBookmarkAction = async (bookmark_id)=> {
    const data = await removeBookmarkFunc(bookmark_id);
    revalidateTag("bookmarks")
    return data;
}

export const postBookmarkAction = async (product_id)=> {
    const data = await postBookmark(product_id);
    revalidateTag("bookmarks")

    return data
}