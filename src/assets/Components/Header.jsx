import { Box , Text} from "@chakra-ui/react";

const Header =()=>{
    return(
        <Box
            style={{
                marginBottom: '10px',
                borderBottom: '2px',
                borderColor: '#725BFF',
                width: '100vw',
            }}
        >
           <Text className="head"> Mwangangi Movies</Text>
        </Box>
    )
}

export default Header;