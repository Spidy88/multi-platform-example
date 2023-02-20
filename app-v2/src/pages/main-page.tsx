import React from 'react';
import {
    Col,
    Row,
    Text,
    Button,
    ButtonVariant,
    FontSize,
    FontWeight
} from '@ui-kit';

export function MainPage() {
    return (
        <Col>
            <Text fontSize={FontSize.T3} fontWeight={FontWeight.Bold}>
                Hello, World!
            </Text>

            <Row>
                <Button
                    variant={ButtonVariant.Secondary}
                    text="No"
                    onPress={() => console.log('No pressed')}
                />

                <Button
                    variant={ButtonVariant.Primary}
                    text="Yes"
                    onPress={() => console.log('Yes pressed')}
                />
            </Row>
        </Col>
    )
}
