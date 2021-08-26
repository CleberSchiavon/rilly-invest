import * as React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

interface Props {
title: string,
description: string,
functionPress: Function,
functionPressCard: Function
}

function InvestmentCard({ title,description,functionPress,functionPressCard }: Props) {
  return (
    <Card onPress={() => functionPressCard()}>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => functionPress()}>
        Investir
      </Button>
    </Card.Actions>
  </Card>
  )
}

export default InvestmentCard;
