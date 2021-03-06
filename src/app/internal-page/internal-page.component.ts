import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-page',
  templateUrl: './internal-page.component.html',
  styleUrls: ['./internal-page.component.scss']
})
export class InternalPageComponent implements OnInit {

  mstList: Array<any>
  selected = -1

  constructor() {
    this.mstList = [
      {"_id":"5dce4e663840cf6fc0436179","address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","attachment":{"address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","decimal_number":0,"description":"test","from_did":"","is_secondaryissue":false,"issuer":"TestAccount5","quantity":100000,"secondaryissue_threshold":127,"symbol":"QWERTY","to_did":"TestAccount5","type":"asset-issue"},"index":0,"locked_height_range":0,"script":"dup hash160 [ 85df6dc5a453fcaba91531e4d6b21e8fe3ee3590 ] equalverify checksig","value":0,"tx":"e90cfb1a7e9aacfa339a0792eaf22bb7008527eea89482af5f80208511a7d913","orphaned_at":0,"height":2144897,"spent_tx":0,"confirmed_at":1573801535},{"_id":"5dccf24b3840cf6432432c90","address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","attachment":{"address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","decimal_number":0,"description":"test","from_did":"TestAccount5","is_secondaryissue":false,"issuer":"TestAccount5","quantity":14,"secondaryissue_threshold":0,"symbol":"VIEWFIN2.CHAIR2","to_did":"TestAccount5","type":"asset-issue"},"index":0,"locked_height_range":0,"script":"dup hash160 [ 85df6dc5a453fcaba91531e4d6b21e8fe3ee3590 ] equalverify checksig","value":0,"tx":"dc29458b9ec05941d3a8d35c75d01b007878c04e97cf590d4987980a0afa00dc","orphaned_at":0,"height":2140741,"spent_tx":0,"confirmed_at":1573712458},{"_id":"5dccf1bf3840cff971432c68","address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","attachment":{"address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","decimal_number":4,"description":"test","from_did":"TestAccount5","is_secondaryissue":false,"issuer":"TestAccount5","quantity":140000,"secondaryissue_threshold":51,"symbol":"VIEWFIN2.CHAIR","to_did":"TestAccount5","type":"asset-issue"},"index":0,"locked_height_range":0,"script":"dup hash160 [ 85df6dc5a453fcaba91531e4d6b21e8fe3ee3590 ] equalverify checksig","value":0,"tx":"f2809dd19c403f2b4d91ac8fd60bc636640e40bc1114d5166b468518ec1a0728","orphaned_at":0,"height":2140731,"spent_tx":0,"confirmed_at":1573712296},{"_id":"5da96969b35be5656a778c3f","address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","attachment":{"address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","decimal_number":4,"description":"test","from_did":"TestAccount5","is_secondaryissue":false,"issuer":"TestAccount5","quantity":10000000000,"secondaryissue_threshold":0,"symbol":"NEW.MST","to_did":"TestAccount5","type":"asset-issue"},"index":0,"locked_height_range":0,"script":"dup hash160 [ 85df6dc5a453fcaba91531e4d6b21e8fe3ee3590 ] equalverify checksig","value":0,"tx":"3b5e0c33669dd9b32f874f96ae3136b9a97e30abbd2fd8c0be8f172b411e4dcb","orphaned_at":0,"height":2046433,"spent_tx":0,"confirmed_at":1571383648},{"_id":"5d9ece72b35be5424b75f0f1","address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","attachment":{"address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","decimal_number":4,"description":"test","from_did":"TestAccount5","is_secondaryissue":false,"issuer":"TestAccount5","quantity":10000000000,"secondaryissue_threshold":0,"symbol":"5.TEST","to_did":"TestAccount5","type":"asset-issue"},"index":0,"locked_height_range":0,"script":"dup hash160 [ 85df6dc5a453fcaba91531e4d6b21e8fe3ee3590 ] equalverify checksig","value":0,"tx":"0d5393aa4ffbf6d4da1374bb6c8e472eef9de80a5332ac575bad0a642b8ac57e","orphaned_at":0,"height":2013949,"spent_tx":0,"confirmed_at":1570688609},{"_id":"5d71f5dcced7bb8a21273032","address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","attachment":{"address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","decimal_number":4,"description":"test","from_did":"TestAccount5","is_secondaryissue":false,"issuer":"TestAccount5","quantity":10000000000,"secondaryissue_threshold":0,"symbol":"DNA.18","to_did":"TestAccount5","type":"asset-issue"},"index":0,"locked_height_range":0,"script":"dup hash160 [ 85df6dc5a453fcaba91531e4d6b21e8fe3ee3590 ] equalverify checksig","value":0,"tx":"a809e936ad822cb791477af83758db5e731f8aa33c0bf057478fabd3aba21178","orphaned_at":0,"height":1876681,"spent_tx":0,"confirmed_at":1567749576},{"_id":"5d6913a2ced7bba83025d852","address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","attachment":{"address":"tK8TaQix9QSgaAAPTaUj7NwKMfbkWRKgVf","decimal_number":4,"description":"test","from_did":"TestAccount5","is_secondaryissue":false,"issuer":"TestAccount5","quantity":10000000000,"secondaryissue_threshold":0,"symbol":"MVS.TEST2","to_did":"TestAccount5","type":"asset-issue"},"index":0,"locked_height_range":0,"script":"dup hash160 [ 85df6dc5a453fcaba91531e4d6b21e8fe3ee3590 ] equalverify checksig","value":0,"tx":"351ad158edefc49fe7fb24a18dbf2f8948270c0418b6572235c0b92aef489087","orphaned_at":0,"height":1849482,"spent_tx":0,"confirmed_at":1567167322}
    ]
  }

  ngOnInit() {
  }

  setSelected = (index: number) => {
    this.selected = index
  }

}
