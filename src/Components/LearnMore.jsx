
import c from "./LearnMore.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
export default function LearnMore(){
    return(
        <>

        <div className={c.container} >
            <p className={c.para}>HubSpot was named a Leader in the Gartner® Magic Quadrant™ for B2B Marketing Automation Platforms for the second year.</p>
            <ButtonGroup variant='outline' spacing='6'>
  <Button colorScheme='blue'>Learn More</Button>
  
</ButtonGroup>
            


        </div>
        
        </>
    )
}