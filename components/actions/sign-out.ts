'use server'

import * as actions from '@/components/auth';

export async function signOut() {
  return actions.signOut();
}