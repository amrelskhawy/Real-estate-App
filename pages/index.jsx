import Link from 'next/link'
import Image from "next/image";
import { Flex, Box, Text, Button, Input } from "@chakra-ui/react";

const Banner = ({ purpose, title1, title2, ImageUrl, desc1, buttonText, linkName }) => (
    <Flex flexWrap="wrap" justifyContent="center"
        alignItems="center" m="10" >
        <Image
            src={ImageUrl}
            height={300}
            width={500}
            alt='banner'

        />
        <Box p={5}>
            <Text color={"gray.500"} fontSize={"sm"} fontWeight={'medium'} >{title1} <br /> {title2}</Text>
            <Text fontSize={"3xl"} fontWeight={'bold'} >{purpose}</Text>
            <Text color={"gray.700"} paddingTop={3} paddingBottom={3} fontSize={"lg"} fontWeight={'sm'}>{desc1}</Text>
            <Button fontSize={"xl"} bg="blue.300"  >
                <Link href={linkName} >
                    {buttonText}
                </Link>
            </Button>
        </Box>
    </Flex>
)

export default function Home() {
    return (
        <div className="">
            <h1>Hello World</h1>
            <Banner
                purpose="RENT A HOME"
                title1="Rental Homes for"
                title2="Everyone"
                desc1="Exploring Apartments, Villas, Homes"
                desc2="and more"
                buttonText="Explore  Renting"
                linkName="/search?purpose=for-rent"
                ImageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            />
            <Flex flexWrap={'wrap'}  >
                {/* Fetch Properties and map over them */}
            </Flex>
            <Banner
                purpose="BUY A HOME"
                title1="Find Homes for"
                title2="Everyone"
                desc1="Exploring Apartments, Villas, Homes"
                desc2="and more"
                buttonText="Explore Renting"
                linkName="/search?purpose=for-rent"
                ImageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            />
        </div>
    )
}
