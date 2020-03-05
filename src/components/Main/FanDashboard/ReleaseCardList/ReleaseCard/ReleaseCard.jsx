import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ReleaseCard.module.scss";
import Card from "react-bootstrap/Card";

class ReleaseCard extends Component {
    render() {
        return (
            <Card className={styles.cardWrapper}>
                <Card.Title className={styles.artistName}>
                    {this.props.cardData.artistName}
                </Card.Title>
                <Card.Img variant="top" src={this.props.cardData.picture} />
                <Card.Body>
                    <Card.Text>{this.props.cardData.countDown}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ReleaseCard;






