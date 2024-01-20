import { Box , Text} from "@chakra-ui/react";

const Header =()=>{
    return(
        <Box
            style={{
                marginBottom: '10px',
                borderBottom: '2px',
                borderColor: '#725BFF',
                
            }}
        >
           <Text className="head" color={'rgba(249, 211, 180, 1)'}> Mwangangi Movies</Text>
        </Box>
    )
}

export default Header;