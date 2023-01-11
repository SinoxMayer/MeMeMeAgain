import { FC, MouseEventHandler, useCallback } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import {
    Button,
    Container,
    Heading,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Disconnected: FC = () => {
    const modalState = useWalletModal()
    const { wallet, connect } = useWallet()
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
        if (event.defaultPrevented) {
            return
        }
        if (!wallet) {
            modalState.setVisible(true)
        } else {
            connect().catch(() => {})
        }
    },
    [wallet, connect, modalState]
    )

    return (
        <Container>
            <VStack spacing={20}>
                <Heading
                  color="white"
                  as="h1"
                  size="3x1"
                  noOfLines={2}
                  textAlign="center"
                >
                    Mint your MeMeMeAgain. Earn $BLD. Level up.
                </Heading>
                <Button
                    bgColor="accent"
                    color="white"
                    maxW="380px"
                    onClick={handleClick}
                >
                    <HStack>
                        <Text>become a MeMeMeAgain</Text>
                        <ArrowForwardIcon />
                </HStack>
            </Button>
        </VStack>
    </Container>
    )
}

export default Disconnected