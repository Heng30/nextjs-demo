import { Button } from '@nextui-org/react';
import TopicCreateForm from '@/components/discuss/topics/create-form';

export default function Discuss() {
  return (
    <div className='w-full grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3 flex justify-start'>
        <h1 className='text-2xl m-2 text-white'>Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm></TopicCreateForm>
      </div>
    </div>
  )
}