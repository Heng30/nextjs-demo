'use server'

import * as actions from '@/components/auth';

export async function signIn() {
    return actions.signIn('github');
}
