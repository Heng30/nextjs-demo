'use server'

import DiscussPath from '@/components/discuss/paths'
import { revalidatePath } from 'next/cache'

export async function createComment() {
    const slug = "";
    const postId = "";
    revalidatePath(DiscussPath.postShow(slug, postId));
}