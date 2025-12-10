import { Spinner, Text } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";

export function Loading() {
    // use React Query `useIsFetching` to determine whether or not to display
    const isFetching = useIsFetching(); // 현재 진행 중인 쿼리 fetch 요청의 총 개수를 정수로 반환
    const display = isFetching ? "inherit" : "none";

    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="olive.200"
            color="olive.800"
            role="status"
            position="fixed"
            zIndex="9999"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            display={display}
        >
            <Text display="none">Loading...</Text>
        </Spinner>
    );
}
