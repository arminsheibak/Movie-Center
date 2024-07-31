import { Card, CardBody, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react"

const MovieCardSkeleton = () => {
  return (
    <Card borderRadius={5} direction='row' height='135px' >
      <SimpleGrid templateColumns='90px 1fr' >
        <Skeleton />
      </SimpleGrid>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default MovieCardSkeleton