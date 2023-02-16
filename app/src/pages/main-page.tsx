import React from 'react';
import {
    Col,
    Row,
    Text,
    Button,
    ButtonVariant,
    FontSize,
    FontWeight
} from '@abc/ui-kit';

export function MainPage() {
    return (
        <Col>
            <Text fontSize={FontSize.T3} fontWeight={FontWeight.Bold}>
                Hello, World!
            </Text>

            <Row>
                <Button variant={ButtonVariant.Secondary}>
                    No
                </Button>

                <Button variant={ButtonVariant.Primary}>
                    Yes
                </Button>
            </Row>
        </Col>
    )
}