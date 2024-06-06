'use server'

import DiscussPath from '@/components/discuss/paths'
import { revalidatePath } from 'next/cache'

export async function createPost() {
    const slug = "";
    revalidatePath(DiscussPath.topicShow(slug));
}