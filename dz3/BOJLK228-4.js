class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.arr = collection;
        this.ipp = itemsPerPage;
	}
	itemCount() {
        return this.arr.length;
	}
	pageCount() {
        return Math.ceil(this.arr.length / this.ipp);
	}
	pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount())
            return -1;

        if (pageIndex < Math.floor(this.arr.length / this.ipp))
            return this.ipp;

        return this.arr.length - this.ipp * pageIndex;
	}
	pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.arr.length)
            return -1;

        return Math.floor(itemIndex / this.ipp);
	}
};