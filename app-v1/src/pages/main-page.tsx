import React from 'react';
import {
    Col,
    Row,
    Text,
    Button,
    ButtonVariant,
    FontSize,
    FontWeight
} from '@abc/ui-kit-v1';

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
                    onPress={() => console.log('Pressed No')}
                />

                <Button
                    variant={ButtonVariant.Primary}
                    text="Yes"
                    onPress={() => console.log('Pressed Yes')}
                />
            </Row>
        </Col>
    )
}
