<template>
  <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

export default defineComponent({
  name: 'About',
  components: {
    DataTable,
    Column,
    ColumnGroup,
    Row,
  },
  setup() {
    const products = ref([
      { code: 'A1', name: 'Product 1', category: 'Category 1', quantity: 3 },
      { code: 'A2', name: 'Product 2', category: 'Category 1', quantity: 8 },
      { code: 'A3', name: 'Product 3', category: 'Category 2', quantity: 1 },
      { code: 'A4', name: 'Product 4', category: 'Category 2', quantity: 12 },
      { code: 'A5', name: 'Product 5', category: 'Category 3', quantity: 2 }
    ]);

    return {
      products
    };
  }
})</script>
