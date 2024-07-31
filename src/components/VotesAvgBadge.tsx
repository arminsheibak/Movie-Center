import { Badge } from "@chakra-ui/react"

interface Props {
  rate: number
}


const VotesAvgBadge = ({rate}: Props) => {
  let color = (rate > 7) ? 'green.700' : (rate > 5) ? 'yellow.600' : 'red.600'
  return (
    <Badge fontSize='13px'  bg={color} color='whitesmoke' paddingX={1}  borderRadius={5} >{rate}</Badge>
  )
}

export default VotesAvgBadge