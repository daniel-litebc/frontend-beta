import { Component, Input } from '@angular/core';

interface TableColumn {
  prop: string;
  name: string;
  checked?: boolean;
}

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.scss']
  
})



export class TableTemplateComponent {
  @Input() columns: any[] = [];
  @Input() rows: any[] = [];
  private tempRows: any[] = []; // Temporary storage for rows (used for filtering)
  selectedColumn: string = ''; // Selected column for filtering
  itemsPerPage = 25
  totalItems = 0; // Total number of items
  page = 0; // Current page
  allColumns: TableColumn[] = []; // Store all columns with checked status
  pendingColumns: TableColumn[] = [];
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleColumnPending(column: TableColumn) {
    column.checked = !column.checked;
  }

  applyColumns() {
    this.columns = this.pendingColumns.filter(col => col.checked);
    this.showDropdown = false; // Close the dropdown
  }

  

  get columnProperties() {
    return this.columns.map(column => column.property);
  }

  
  ngOnChanges() {
    this.tempRows = [...this.rows];
    this.totalItems = this.rows.length;
    this.allColumns = this.columns.map(column => ({
      ...column,
      checked: true
    }));
    this.pendingColumns = [...this.allColumns];
    
  }

  // Handle page changes
  setPage(pageInfo: any) {
    this.page = pageInfo.offset;
    this.updatePage();
  }

  updatePage() {
    const start = this.page * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.rows = this.tempRows.slice(start, end);
  }

  // Filter the rows based on the selected column and search term
  updateFilter(searchTerm: string) {
    this.page = 0
    this.rows = searchTerm
      ? this.tempRows.filter(row => {
          const value = row[this.selectedColumn];
          return value && value.toString().toLowerCase().includes(searchTerm.toLowerCase());
        })
      : [...this.tempRows];
  }

  // Function to toggle column visibility
  toggleColumn(column: TableColumn) { // Use TableColumn interface
    column.checked = !column.checked;
    this.columns = this.allColumns.filter(col => col.checked);
  }
}
