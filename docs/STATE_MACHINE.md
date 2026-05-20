# Marketplace State Machine

## Buy/Sell Order

1. active
2. sold_pending_ship
3. seller_label_created
4. seller_shipped
5. received_at_auth_center
6. in_authentication
7. authenticated
8. buyer_shipped
9. completed
10. payout_released

Failure paths:

- seller_no_ship -> cancel/refund/bad seller rating
- failed_auth -> refund buyer/return or hold seller item
- damaged_in_transit -> dispute
- buyer_claim -> support review

## Trade

1. sent
2. accepted
3. both_paid_cash_difference
4. both_labels_created
5. both_shipped
6. both_received_at_auth
7. both_authenticated
8. ship_to_counterparties
9. completed

Failure path:

- either pair fails -> trade unwinds
- both sellers receive own pair back
- cash difference refunded
- strike logged against failing party if misconduct
