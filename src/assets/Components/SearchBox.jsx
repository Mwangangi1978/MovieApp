import { Input , InputGroup, InputRightElement} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchBox =(props)=>{
    return(
       
            <InputGroup
                 alignItems={'center'} 
                 alignSelf={'center'} 
                 width={'50%'} 
            >
                <InputRightElement onClick={props.onClick} cursor={'pointer'}>
                    <SearchIcon color='rgba(249, 211, 180, 1)' />
                </InputRightElement>
                <Input  
                    variant='filled' 
                    placeholder='MovieName' 
                    value={props.value}  
                    onChange={props.onChange}  
                    backgroundColor='#212426'
                    borderColor={'rgba(249, 211, 180, 1)'}
                    color={'white'} 
                />
            </InputGroup>
    )
}

export default SearchBox;