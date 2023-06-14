'use client';

import { ShowMoreProps } from '@/types';
//server side
// import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
//server side
// import { updateSearchParams } from '@/utils';

//server side
// const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
//client side
const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

    //use router only if server side
    // const router = useRouter();

    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 10;
        setLimit(newLimit);

        //only server side
        // Update the "limit" search parameter in the URL with the new value
        // const newPathname = updateSearchParams('limit', `${newLimit}`);
        
        // router.push(newPathname);
    };

    return (
        <div className='w-full flex-center gap-5 mt-10'>
            {!isNext && (
                <CustomButton
                    btnType='button'
                    title='Show More'
                    containerStyles='bg-primary-blue rounded-full text-white'
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore